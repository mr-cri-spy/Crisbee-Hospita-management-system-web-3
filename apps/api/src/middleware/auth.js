const rolePermissions = {
  Admin: ['*'],
  Doctor: ['read:all', 'write:emr', 'write:prescription', 'write:lab'],
  Nurse: ['read:all', 'write:lab'],
  Receptionist: ['read:appointments', 'write:appointments']
};

export function requireRole(requiredPermission) {
  return (req, res, next) => {
    const role = req.headers['x-role'] || 'Receptionist';
    const permissions = rolePermissions[role] || [];

    if (permissions.includes('*') || permissions.includes(requiredPermission)) {
      req.userRole = role;
      return next();
    }

    return res.status(403).json({ error: 'Forbidden for this role' });
  };
}
