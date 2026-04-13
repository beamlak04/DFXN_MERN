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
	if (!webhookSecret) {
		return true;
	}

	if (!rawBody || !signature) {
		return false;
	}

	const digest = crypto
		.createHmac("sha256", webhookSecret)
		.update(rawBody)
		.digest("hex");

	return digest === signature;
};

