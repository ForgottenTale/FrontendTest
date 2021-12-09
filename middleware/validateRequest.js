
const validate = (schema)=> async(req,res,next)=>{
    try {
        await schema.validate(req.body)
        next();
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}
export default validate