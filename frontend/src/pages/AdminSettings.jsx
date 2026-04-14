import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import { useAdminStore } from "../stores/useAdminStore";

const AdminSettings = () => {
  const {
    settingsProfile,
    settingsPermissions,
    settingsContactNotifications,
    adminUsers,
    settingsLoading,
    fetchSettings,
    fetchAdminUsers,
    createAdminUser,
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
  const [adminUserForm, setAdminUserForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  useEffect(() => {
    if (settingsPermissions.canManageAdmins) {
      fetchAdminUsers();
    }
  }, [settingsPermissions.canManageAdmins, fetchAdminUsers]);

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

  const submitAdminUser = async (e) => {
    e.preventDefault();
    const created = await createAdminUser(adminUserForm);
    if (created) {
      setAdminUserForm({ name: "", email: "", password: "" });
    }
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

          {settingsPermissions.canManageAdmins && (
            <div className="bg-white rounded-xl shadow p-6 space-y-5 max-w-3xl">
              <h2 className="text-lg font-semibold">Admin Access Management</h2>
              <p className="text-sm text-gray-500">
                Only master users can create additional admin accounts.
              </p>

              <form onSubmit={submitAdminUser} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  type="text"
                  value={adminUserForm.name}
                  onChange={(e) =>
                    setAdminUserForm({ ...adminUserForm, name: e.target.value })
                  }
                  className="border rounded-md px-3 py-2"
                  placeholder="Admin name"
                  required
                />
                <input
                  type="email"
                  value={adminUserForm.email}
                  onChange={(e) =>
                    setAdminUserForm({ ...adminUserForm, email: e.target.value })
                  }
                  className="border rounded-md px-3 py-2"
                  placeholder="admin@example.com"
                  required
                />
                <input
                  type="password"
                  value={adminUserForm.password}
                  onChange={(e) =>
                    setAdminUserForm({ ...adminUserForm, password: e.target.value })
                  }
                  className="border rounded-md px-3 py-2"
                  placeholder="Temporary password"
                  minLength={8}
                  required
                />
                <button
                  type="submit"
                  className="md:col-span-3 bg-gray-900 text-white px-4 py-2 rounded-md"
                  disabled={settingsLoading}
                >
                  {settingsLoading ? "Creating..." : "Create Admin User"}
                </button>
              </form>

              <div className="space-y-2">
                <h3 className="font-medium">Existing Admin Users</h3>
                <div className="border rounded-md divide-y">
                  {adminUsers.length > 0 ? (
                    adminUsers.map((user) => (
                      <div key={user._id} className="px-3 py-2 flex items-center justify-between text-sm">
                        <div>
                          <p className="font-medium text-gray-800">{user.name}</p>
                          <p className="text-gray-500">{user.email}</p>
                        </div>
                        <span className="uppercase text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-700">
                          {user.role}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="px-3 py-3 text-sm text-gray-500">No admin users found.</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </AdminNav>
    </div>
  );
};

export default AdminSettings;
