auth.post("/signup", async(req, res) => {
    const { body } = req;
    try{
        const createdCustomer = await createCustomer(body);
        if(createdCustomer.id){
            res.status(200).json(createdCustomer);
        }else{
            res.status(500).json({error: 'Cannot create user'});
        }
    }catch(err){
        return err;
    }
})

auth.post("/signin", async(req, res) => {
    const { body } = req;
    try{
        const validIdNum = await checkAccount(body.username, body.password);
        if(validIdNum){
            res.status(200).json(validIdNum);
        }else{
            res.status(500).json({error: 'Cannot create user'});
        }
    }catch(err){
        return err;
    }
});
