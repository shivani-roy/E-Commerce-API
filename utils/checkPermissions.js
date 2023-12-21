const CustomError = require("../errors");

const checkPermissions = (requestUser, resourceUserId) => {
  // console.log(requestUser)
  // console.log(resourceUserId)
  // console.log(typeof resourceUserId)

  if (requestUser.role === "admin") return;
  if (requestUser.userId === resourceUserId) return;
  if (requestUser.userId === resourceUserId.toString()) return; // needed for revieController

  throw new CustomError.UnauthorizedError(
    "Not authorized to access this route"
  );
  // if(requestUser.userId=== resourceUserId.toString()) return;   no need to convert to string since we are passing id, not user._id in userController
};

module.exports = checkPermissions;
