function telephoneCheck(str) {
	var regEx = /^(1?\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/gm;
	var flag = regEx.test(str);
	return flag;
}

telephoneCheck("555-555-5555"); //should return a boolean. OK
telephoneCheck("1 555-555-5555"); //should return true. OK
telephoneCheck("1 (555) 555-5555"); //should return true. OK
telephoneCheck("5555555555"); //should return true. OK
telephoneCheck("555-555-5555"); //should return true. OK
telephoneCheck("(555)555-5555"); //should return true. OK
telephoneCheck("1(555)555-5555"); //should return true. OK
telephoneCheck("555-5555"); //should return false. OK
telephoneCheck("5555555"); //should return false. OK
telephoneCheck("1 555)555-5555"); //should return false. OK
telephoneCheck("1 555 555 5555"); //should return true. OK
telephoneCheck("1 456 789 4444"); //should return true. OK
telephoneCheck("123**&!!asdf#"); //should return false. OK
telephoneCheck("55555555"); // should return false. OK
telephoneCheck("(6505552368)"); //should return false OK
telephoneCheck("2 (757) 622-7382"); //should return false. OK
telephoneCheck("0 (757) 622-7382"); //should return false. OK
telephoneCheck("-1 (757) 622-7382"); //should return false. OK
telephoneCheck("2 757 622-7382"); //should return false. OK
telephoneCheck("10 (757) 622-7382"); //should return false. OK
telephoneCheck("27576227382"); //should return false. OK
telephoneCheck("(275)76227382"); //should return false. OK
telephoneCheck("2(757)6227382"); //should return false. OK
telephoneCheck("2(757)622-7382");//should return false. OK
telephoneCheck("555)-555-5555");//should return false. OK
telephoneCheck("(555-555-5555"); //should return false. OK
telephoneCheck("(555)5(55?)-5555");//should return false. OK
telephoneCheck("1 (860) 869-7113"); //should return true. It's my cell #! OK