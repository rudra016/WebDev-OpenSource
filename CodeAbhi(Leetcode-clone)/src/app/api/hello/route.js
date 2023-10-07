import { NextRequest, NextResponse } from "next/server";


export  async function GET(req){
    const name = await req.json();
    return NextResponse.json({msg: "hello"+name});
}


export async function POST(req){
    // const {name,email} = await req.json();
    

    return NextResponse.json({"msg":`this is a post request ${name} my email is ${email}`})
}