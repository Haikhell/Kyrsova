async function getUser(id) {
  let userModel = User.find({ _id: id });
  if (!userModel) {
    return {
      data: { message: 'Not found user' }
    };
  }
  return {
    data: {
      user: userModel
    }
  };
}
