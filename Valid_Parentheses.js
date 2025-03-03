var isValid = function(s) {
    list = []
    for (let i = 0; i < s.length; i++) {
        if ( s[i] == '(' || s[i] == '[' || s[i] == '{'){
            list.push(s[i]);
        }
        else if ( s[i] == ')' || s[i] == ']' || s[i] == '}'){
            if (list.length == 0 || (s[i] == ')' && list[list.length - 1]!= '(') || (s[i] == ']' && list[list.length - 1]!= '[') || (s[i] == '}' && list[list.length - 1]!= '{')){
                return false;
            }
            list.pop();
        }
    }
    return list.length == 0;
};

console.log(isValid("(){}[]{"))


