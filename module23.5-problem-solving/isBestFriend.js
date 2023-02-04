function isBestFriend(object1,object2) {

    if(object1.friend==object2.name && object1.name==object2.friend)
    return true;
    else
    return false;
}

console.log(isBestFriend({ name: "abul1", friend: "babul1" },{ name: "babul12", friend: "abul1" }));