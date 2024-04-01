export const sipacHandeling = (sipac:string) => {
    const sipacForm = "1234567890";
    let sipacState:boolean = false;
    for(let i = 0; i < sipacForm.length; i++){
        if(sipac.includes(sipacForm[i])){
            sipacState = true;
        }
    }
    if(!sipacState){
        //acionar notificação de aviso, por enquanto retorna apenas nenhum
        return 'nenhum';
    };
    if(sipac == '' || sipac.includes(' ')){
        return 'nenhum';
    }
    return sipac;
};

