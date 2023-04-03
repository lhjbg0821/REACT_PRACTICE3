const myProfile = {
  nickName: "ollok_99",
  age: 25,
  job: "student",
  isGenius: true,
};

const ollok_00 = {
  nickName: "ollok_00",
};

const { nickName } = myProfile;
const { nickName: newnickName } = ollok_00;

console.log(nickName);
console.log(myProfile.nickName);
