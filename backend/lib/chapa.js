import axios from "axios";
import crypto from "crypto";

const CHAPA_BASE_URL = "https://api.chapa.co/v1";

const getChapaHeaders = () => {
	const secretKey = process.env.CHAPA_SECRET_KEY;
	if (!secretKey) {
		throw new Error("CHAPA_SECRET_KEY is not configured");
	}

	return {
		Authorization: `Bearer ${secretKey}`,
		"Content-Type": "application/json",
	};
};

export const initializeChapaPayment = async ({
	amount,
	email,
	firstName,
	lastName,
	phoneNumber,
	txRef,
	callbackUrl,
	returnUrl,
	customization,
	paymentMethod,
}) => {
	const payload = {
		amount,
		currency: "ETB",
		email,
		first_name: firstName,
		last_name: lastName,
		phone_number: phoneNumber,
		tx_ref: txRef,
		callback_url: callbackUrl,
		return_url: returnUrl,
		customization,
	};

	if (paymentMethod === "Telebirr") {
		payload.available_payment_methods = ["telebirr"];
	}

	const response = await axios.post(`${CHAPA_BASE_URL}/transaction/initialize`, payload, {
		headers: getChapaHeaders(),
	});

	return response.data;
};

export const verifyChapaPayment = async (txRef) => {
	const response = await axios.get(`${CHAPA_BASE_URL}/transaction/verify/${txRef}`, {
		headers: getChapaHeaders(),
	});

	return response.data;
};

export const validateChapaCallbackSignature = ({ rawBody, signature }) => {
	const webhookSecret = process.env.CHAPA_WEBHOOK_SECRET;
	// Enforce webhook secret presence — do not silently accept callbacks when
	// no secret is configured (previous behavior returned true which is unsafe).
	if (!webhookSecret) {
		return false;
	}

	if (!rawBody || !signature) {
		return false;
	}

	const digest = crypto.createHmac("sha256", webhookSecret).update(rawBody).digest();

	// Accept hex or base64 signatures from Chapa; normalize to buffers for
	// timing-safe comparison.
	let sigBuf;
	try {
		// Try hex first
		sigBuf = Buffer.from(String(signature).trim(), "hex");
		if (sigBuf.length === 0) throw new Error("invalid-hex");
	} catch (err) {
		try {
			// Fallback to base64
			sigBuf = Buffer.from(String(signature).trim(), "base64");
			if (sigBuf.length === 0) throw new Error("invalid-base64");
		} catch (err2) {
			return false;
		}
	}

	// Ensure equal length before timingSafeEqual to avoid exceptions.
	if (!Buffer.isBuffer(digest) || digest.length !== sigBuf.length) {
		// If lengths differ, compare in constant time using a padded buffer to
		// avoid leaking timing — create a same-length buffer and compare.
		const paddedDigest = Buffer.concat([digest, Buffer.alloc(Math.max(0, sigBuf.length - digest.length))]);
		const paddedSig = Buffer.concat([sigBuf, Buffer.alloc(Math.max(0, paddedDigest.length - sigBuf.length))]);
		return crypto.timingSafeEqual(paddedDigest, paddedSig);
	}

	return crypto.timingSafeEqual(digest, sigBuf);
};

