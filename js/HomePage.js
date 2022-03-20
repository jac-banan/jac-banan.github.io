function transliterate(){
    var latinText = document.getElementById("latin").value;
    var cyrylicText = "";
    
    for(var i = 0; i<latinText.length; i++){
        var char0 = latinText.charAt(i);
        var char1 = latinText.charAt(i+1);

        //A
        if(char0 == 'a'){
            cyrylicText += 'а'
        }
        else if(char0 == 'A'){
            cyrylicText += 'А'
        }
        //Ą
        else if(char0 == 'ą'){
            cyrylicText += 'ѫ'
        }
        else if(char0 == 'Ą'){
            cyrylicText += 'Ѫ'
        }
        //B
        else if(char0 == 'b'){
            cyrylicText += 'б'
        }
        else if(char0 == 'b'){
            cyrylicText += 'Б'
        }
        //C + CZ + CH
        else if(char0 == 'c'){
            if(check_RZ_SZ_CZ(char1)){
                cyrylicText += 'ч';
                i++
            }
            else if(check_CH(char1)){
                cyrylicText += 'х';
                i++
            }
            else{
                cyrylicText += 'ц'
            }
        }
        else if(char0 == 'C'){
            if(check_RZ_SZ_CZ(char1)){
                cyrylicText += 'Ч';
                i++
            }
            else if(check_CH(char1)){
                cyrylicText += 'Х';
                i++
            }
            else{
                cyrylicText += 'Ц'
            }
        }
        //Ć
        else if(char0 == 'ć'){
            cyrylicText += 'ць'
        }
        else if(char0 == 'Ć'){
            cyrylicText += 'Ць'
        }
        //D
        else if(char0 == 'd'){
            cyrylicText += 'д'
        }
        else if(char0 == 'D'){
            cyrylicText += 'Д'
        }
        //E
        else if(char0 == 'e'){
            cyrylicText += 'е'
        }
        else if(char0 == 'E'){
            cyrylicText += 'Е'
        }
        //Ę
        else if(char0 == 'ę'){
            cyrylicText += 'ѧ'
        }
        else if(char0 == 'Ę'){
            cyrylicText += 'Ѧ'
        }
        //F
        else if(char0 == 'f'){
            cyrylicText += 'ф'
        }
        else if(char0 == 'F'){
            cyrylicText += 'Ф'
        }
        //G
        else if(char0 == 'g'){
            cyrylicText += 'ґ'
        }
        else if(char0 == 'G'){
            cyrylicText += 'Ґ'
        }
        //H
        else if(char0 == 'h'){
            cyrylicText += 'г'
        }
        else if(char0 == 'H'){
            cyrylicText += 'Г'
        }
        //I + IE + IĘ
        else if(char0 == 'i'){
            if(check_IE_JE(char1)){
                cyrylicText += 'є';
                i++
            }
            else if(check_Ę(char1)){
                cyrylicText += 'ѩ';
                i++
            }
            else{
                cyrylicText += 'і'
            }
        }
        else if(char0 == 'I'){
            if(check_IE_JE(char1)){
                cyrylicText += 'Є';
                i++
            }
            else if(check_Ę(char1)){
                cyrylicText += 'Ѩ';
                i++
            }
            else{
                cyrylicText += 'І'
            }
        }
        //J + JE + JĘ + JA + JI + JU + JĄ
        else if(char0 == 'j'){
            if(check_IE_JE(char1)){
                cyrylicText += 'є';
                i++
            }
            else if(check_Ę(char1)){
                cyrylicText += 'ѩ';
                i++
            }
            else if(check_JA(char1)){
                cyrylicText += 'я';
                i++
            }
            else if(check_JI(char1)){
                cyrylicText += 'ї';
                i++
            }
            else if(check_JU(char1)){
                cyrylicText += 'ю';
                i++
            }
            else if(check_Ą(char1)){
                cyrylicText += 'я';
                i++
            }
            else{
                cyrylicText += 'й'
            }
        }
        else if(char0 == 'J'){
            if(check_IE_JE(char1)){
                cyrylicText += 'Є';
                i++
            }
            else if(check_Ę(char1)){
                cyrylicText += 'Ѩ';
                i++
            }
            else if(check_JA(char1)){
                cyrylicText += 'Я';
                i++
            }
            else if(check_JI(char1)){
                cyrylicText += 'Ї';
                i++
            }
            else if(check_JU(char1)){
                cyrylicText += 'Ю';
                i++
            }
            else if(check_Ą(char1)){
                cyrylicText += 'Я';
                i++
            }
            else{
                cyrylicText += 'Й'
            }
        }
        //L
        else if(char0 == 'l'){
            cyrylicText += 'ль'
        }
        else if(char0 == 'L'){
            cyrylicText += 'Ль'
        }
        //Ł
        else if(char0 == 'ł'){
            cyrylicText += 'л'
        }
        else if(char0 == 'Ł'){
            cyrylicText += 'Л'
        }
        //M
        else if(char0 == 'm'){
            cyrylicText += 'м'
        }
        else if(char0 == 'M'){
            cyrylicText += 'М'
        }
        //N
        else if(char0 == 'n'){
            cyrylicText += 'н'
        }
        else if(char0 == 'N'){
            cyrylicText += 'Н'
        }
        //Ń
        else if(char0 == 'ń'){
            cyrylicText += 'нь'
        }
        else if(char0 == 'Ń'){
            cyrylicText += 'Нь'
        }
        //O
        else if(char0 == 'o'){
            cyrylicText += 'о'
        }
        else if(char0 == 'O'){
            cyrylicText += 'О'
        }
        //Ó
        else if(char0 == 'ó'){
            cyrylicText += 'ꙋ'
        }
        else if(char0 == 'Ó'){
            cyrylicText += 'Ꙋ'
        }
        //P
        else if(char0 == 'p'){
            cyrylicText += 'п'
        }
        else if(char0 == 'P'){
            cyrylicText += 'П'
        }
        //R + RZ
        else if(char0 == 'r'){
            if(check_RZ_SZ_CZ(char1)){
                cyrylicText += 'рь';
                i++
            }
            else{
                cyrylicText += 'р'
            }
        }
        else if(char0 == 'R'){
            if(check_RZ_SZ_CZ(char1)){
                cyrylicText += 'Рь';
                i++
            }
            else{
                cyrylicText += 'Р'
            }
        }
        //S + SZ + SZCZ
        else if(char0 == 's'){
            if(check_RZ_SZ_CZ(char1)){
                var char2 = latinText.charAt(i+2);
                var char3 = latinText.charAt(i+3);
                
                if(check_SZCZ(char2,char3)){
                    cyrylicText += 'щ';
                    i += 3;
                }
                else{
                    cyrylicText += 'ш';
                    i++
                }
            }
            else{
                cyrylicText += 'с'
            }
        }
        else if(char0 == 'S'){
            if(check_RZ_SZ_CZ(char1)){
                var char2 = latinText.charAt(i+2);
                var char3 = latinText.charAt(i+3);

                if(check_SZCZ(char2,char3)){
                    cyrylicText += 'Щ';
                    i += 3;
                }
                else{
                    cyrylicText += 'Ш';
                    i++
                }
            }
            else{
                cyrylicText += 'С'
            }
        }
        //Ś
        else if(char0 == 'ś'){
            cyrylicText += 'сь'
        }
        else if(char0 == 'Ś'){
            cyrylicText += 'Сь'
        }
        //T
        else if(char0 == 't'){
            cyrylicText += 'т'
        }
        else if(char0 == 'T'){
            cyrylicText += 'Т'
        }
        //U
        else if(char0 == 'u'){
            cyrylicText += 'у'
        }
        else if(char0 == 'U'){
            cyrylicText += 'У'
        }
        //W
        else if(char0 == 'w'){
            cyrylicText += 'в'
        }
        else if(char0 == 'W'){
            cyrylicText += 'В'
        }
        //X
        else if(char0 == 'x'){
            cyrylicText += 'ikc'
        }
        else if(char0 == 'X'){
            cyrylicText += 'IKC'
        }
        //Y
        else if(char0 == 'y'){
            cyrylicText += 'и'
        }
        else if(char0 == 'Y'){
            cyrylicText += 'И'
        }
        //Z
        else if(char0 == 'z'){
            cyrylicText += 'з'
        }
        else if(char0 == 'Z'){
            cyrylicText += 'З'
        }
        //Ź
        else if(char0 == 'ź'){
            cyrylicText += 'зь'
        }
        else if(char0 == 'Ź'){
            cyrylicText += 'Зь'
        }
        //Ż
        else if(char0 == 'ż'){
            cyrylicText += 'ж'
        }
        else if(char0 == 'Ż'){
            cyrylicText += 'Ж'
        }
        //Everything else kept the same
        else{
            cyrylicText += char0
        }
    }

    document.getElementById("cyrylic").value = cyrylicText;
}

function check_IE_JE(char1){
    if(char1 == 'e'){
        return true;
    }
    else if(char1 == 'E'){
        return true;
    }
    else{
        return false;
    }
}

function check_JA(char1){
    if(char1 == 'a'){
        return true;
    }
    else if(char1 == 'A'){
        return true;
    }
    else{
        return false;
    }
}

function check_JI(char1){
    if(char1 == 'i'){
        return true;
    }
    else if(char1 == 'I'){
        return true;
    }
    else{
        return false;
    }
}

function check_JU(char1){
    if(char1 == 'u'){
        return true;
    }
    else if(char1 == 'U'){
        return true;
    }
    else{
        return false;
    }
}

function check_RZ_SZ_CZ(char1){
    if(char1 == 'z'){
        return true;
    }
    else if(char1 == 'Z'){
        return true;
    }
    else{
        return false;
    }
}

function check_SZCZ(char2,char3){
    console.log(char2);
    console.log(char3);
    if(char2 == 'c' || char2 == 'C'){
        if(char3 == 'z' || char3 == 'Z'){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

function check_CH(char1){
    if(char1 == 'h'){
        return true;
    }
    else if(char1 == 'H'){
        return true;
    }
    else{
        return false;
    }
}

function check_Ę(char1){
    if(char1 == 'ę'){
        return true;
    }
    else if(char1 == 'Ę'){
        return true;
    }
    else{
        return false;
    }
}

function check_Ą(char1){
    if(char1 == 'ą'){
        return true;
    }
    else if(char1 == 'Ą'){
        return true;
    }
    else{
        return false;
    }
}