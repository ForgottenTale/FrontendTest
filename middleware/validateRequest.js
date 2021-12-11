
const validate = (schema)=> async(req,res,next)=>{
    try {
        await schema.validate(req.body)
        console.log(JSON.parse(req.body.services));
        next();
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}
export default validate