import db from '../../../../lib/db'
import StResult from '../../../../moduls/result'


export async function POST(req:Request){

try {

    await db()
    const data=await req.json();

    const resultinsert=new StResult(data);

    await resultinsert.save();

return Response.json({
    data:"st result addeed succesufully"
})


} catch (error) {
    
}

}



// DB_URL="mongodb+srv://krishnanhari3458:eeQSsxpBx9ViEKOY@cluster0.dif66.mongodb.net/result3"