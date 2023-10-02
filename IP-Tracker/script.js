const btn=document.querySelector(".home");
btn.style.display="none";
const lookup_btn=document.querySelector(".lookup_ip");
const hide_text=document.querySelector(".intro1");
const ip=document.querySelector(".ip");
const address=document.querySelector(".address");
const isp=document.querySelector(".isp");
const geoloc=document.querySelector(".geoloc");
const message=document.querySelector(".message");
const image=document.querySelector(".img");
const loader=document.querySelector(".loader");
lookup_btn.addEventListener("click",() => {
    hide_text.style.display="none";
    lookup_btn.style.display="none";
    loader.style.display="flex";
    axios.get("https://ipapi.co/json").then((response)=>{
        loader.style.display="none";
        ip.textContent=`ip:${response.data.ip}`;
        ip.style.font="large Montserrat,sans-serif";
        ip.style.padding="0 0 3px 0";
        address.textContent=`Location: ${response.data.region}, ${response.data.country_name}`;
        address.style.font="large Montserrat,sans-serif";
        address.style.padding="0 0 3px 0";
        isp.textContent=`ISP: ${response.data.org}`;
        isp.style.font="large Montserrat,sans-serif";
        isp.style.padding="0 0 3px 0";
        geoloc.textContent=`Latitude and Longitude: ${response.data.latitude} and  ${response.data.longitude}`;
        geoloc.style.font="large Montserrat,sans-serif";
        geoloc.style.padding="0 0 3px 0";
        message.textContent=`Thanks for using our Website!`;
        message.style.font="large Montserrat,sans-serif";
        btn.style.display="flex";
        btn.addEventListener("click",()=>{
            window.location.assign('/');
        })
    })
})