import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import { useAdminStore } from "../stores/useAdminStore";

const AdminSettings = () => {
  const {
    settingsProfile,
    settingsContactNotifications,
    settingsLoading,
    fetchSettings,
    updateProfile,
    updatePassword,
    updateContactNotificationSettings,
  } = useAdminStore();

  const [profileForm, setProfileForm] = useState({ name: "", email: "" });
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [notificationForm, setNotificationForm] = useState({
    emailNotificationsEnabled: true,
    contactNotifyTo: "",
  });

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  useEffect(() => {
    setProfileForm({
      name: settingsProfile.name || "",
      email: settingsProfile.email || "",
    });
  }, [settingsProfile]);

  useEffect(() => {
    setNotificationForm({
      emailNotificationsEnabled: settingsContactNotifications.emailNotificationsEnabled,
      contactNotifyTo: settingsContactNotifications.contactNotifyTo || "",
    });
  }, [settingsContactNotifications]);

  const submitProfile = async (e) => {
    e.preventDefault();
    await updateProfile(profileForm);
  };

  const submitPassword = async (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      return;
    }
    await updatePassword({
      currentPassword: passwordForm.currentPassword,
      newPassword: passwordForm.newPassword,
    });
    setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  const submitNotifications = async (e) => {
    e.preventDefault();
    await updateContactNotificationSettings(notificationForm);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav activePage={"settings"}>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <form onSubmit={submitProfile} className="bg-white rounded-xl shadow p-6 space-y-4">
              <h2 className="text-lg font-semibold">Profile</h2>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Name</label>
                <input
                  type="text"
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                  className="w-full border rounded-md px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Email</label>
                <input
                  type="email"
                  value={profileForm.email}
                  onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                  className="w-full border rounded-md px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Role</label>
                <input
                  type="text"
                  value={settingsProfile.role || ""}
                  disabled
                  className="w-full border rounded-md px-3 py-2 bg-gray-100"
                />
              </div>

              <button
                type="submit"
                className="bg-gray-900 text-white px-4 py-2 rounded-md"
                disabled={settingsLoading}
              >
                {settingsLoading ? "Saving..." : "Save Profile"}
              </button>
            </form>

            <form onSubmit={submitPassword} className="bg-white rounded-xl shadow p-6 space-y-4">
              <h2 className="text-lg font-semibold">Change Password</h2>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Current Password</label>
                <input
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={(e) =>
                    setPasswordForm({ ...passwordForm, currentPassword: e.target.value })
                  }
                  className="w-full border rounded-md px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">New Password</label>
                <input
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) =>
                    setPasswordForm({ ...passwordForm, newPassword: e.target.value })
                  }
                  className="w-full border rounded-md px-3 py-2"
                  minLength={6}
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Confirm New Password</label>
                <input
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={(e) =>
                    setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })
                  }
                  className="w-full border rounded-md px-3 py-2"
                  minLength={6}
                  required
                />
              </div>

              {passwordForm.newPassword !== passwordForm.confirmPassword &&
                passwordForm.confirmPassword && (
                  <p className="text-sm text-red-500">Passwords do not match.</p>
                )}

              <button
                type="submit"
                className="bg-gray-900 text-white px-4 py-2 rounded-md"
                disabled={
                  settingsLoading ||
                  !passwordForm.currentPassword ||
                  !passwordForm.newPassword ||
                  passwordForm.newPassword !== passwordForm.confirmPassword
                }
              >
                {settingsLoading ? "Updating..." : "Update Password"}
              </button>
            </form>
          </div>

          <form onSubmit={submitNotifications} className="bg-white rounded-xl shadow p-6 space-y-4 max-w-2xl">
            <h2 className="text-lg font-semibold">Contact Notifications</h2>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={notificationForm.emailNotificationsEnabled}
                onChange={(e) =>
                  setNotificationForm({
                    ...notificationForm,
                    emailNotificationsEnabled: e.target.checked,
                  })
                }
              />
              <span className="text-sm text-gray-700">Enable email notifications for new customer complaints</span>
            </label>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Notification recipient email</label>
              <input
                type="email"
                value={notificationForm.contactNotifyTo}
                onChange={(e) =>
                  setNotificationForm({
                    ...notificationForm,
                    contactNotifyTo: e.target.value,
                  })
                }
                className="w-full border rounded-md px-3 py-2"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-gray-900 text-white px-4 py-2 rounded-md"
              disabled={settingsLoading}
            >
              {settingsLoading ? "Saving..." : "Save Notification Settings"}
            </button>
          </form>
        </div>
      </AdminNav>
    </div>
  );
};

export default AdminSettings;
