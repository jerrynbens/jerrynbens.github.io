// AMAZON

/*
    Amazon Remarketing Pixel (us) -->
    Use of this pixel is subject to the Amazon ad specs and policies at http://www.amazon.com/b/?&node=7253015011
*/

var amazonRemarketingPixelIMG = document.createElement("IMG");
amazonRemarketingPixelIMG.setAttribute( 'alt', '' );
amazonRemarketingPixelIMG.setAttribute( 'height', '1' );
amazonRemarketingPixelIMG.setAttribute( 'src', 'https://s.amazon-adsystem.com/iui3?d=forester-did&ex-fargs=%3Fid%3Dcd697355-13f4-73dd-8b26-e45af7f7126a%26type%3D55%26m%3D1&ex-fch=416613&ex-src=www.benjerry.com/&ex-hargs=v%3D1.0%3Bc%3D3626845756286%3Bp%3DCD697355-13F4-73DD-8B26-E45AF7F7126A' );
amazonRemarketingPixelIMG.style.border = 'none';
amazonRemarketingPixelIMG.style.display = 'none';
amazonRemarketingPixelIMG.setAttribute( 'width', '1' );

document.body.appendChild( amazonRemarketingPixelIMG );

/*
<img height="1" width="1" border="0" alt="" src="https://s.amazon-adsystem.com/iui3?d=forester-did&ex-fargs=%3Fid%3Dcd697355-13f4-73dd-8b26-e45af7f7126a%26type%3D55%26m%3D1&ex-fch=416613&ex-src=www.benjerry.com/&ex-hargs=v%3D1.0%3Bc%3D3626845756286%3Bp%3DCD697355-13F4-73DD-8B26-E45AF7F7126A" />
*/






// FACEBOOK

// Facebook Pixel Code (us)
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');

// Track pageview
fbq('init', '222307131296539');
fbq('track', 'PageView');

/*
<noscript>
	<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=222307131296539&ev=PageView&noscript=1" />
</noscript>
*/





// FLOODLIGHT

// DoubleClick Floodlight Tag - UPDATED 360i
var floodlightPixelIFRAME = document.createElement( 'iframe' );
floodlightPixelIFRAME.setAttribute( 'frameborder', '0' );
floodlightPixelIFRAME.setAttribute( 'height', '1' );
floodlightPixelIFRAME.setAttribute( 'id', 'doubleClickFloodlightTag' );
floodlightPixelIFRAME.setAttribute( 'src', '' );
floodlightPixelIFRAME.style.display = 'none';
floodlightPixelIFRAME.setAttribute( 'width', '1' );

document.body.appendChild( floodlightPixelIFRAME );

/*
<iframe id="doubleClickFloodlightTag" src="" width="1" height="1" frameborder="0" style="display: none"></iframe>
*/

var axel = Math.random() + "";
var a = axel * 10000000000000;
	var src = "https://8463383.fls.doubleclick.net/activityi;src=8463383;type=univers;cat=benje0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + a + "?";
document.getElementById("doubleClickFloodlightTag").setAttribute("src", src);


/*
<noscript>
	<iframe src="https://8463383.fls.doubleclick.net/activityi;src=8463383;type=univers;cat=benje0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display: none"></iframe>
</noscript>
*/





// PINTEREST

// Pinterest Pixel Code (us) -->
!function(e){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var n=window.pintrk;n.queue=[],n.version="3.0";var t=document.createElement("script");t.async=!0,t.src=e;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
pintrk('load','2617640505381');
pintrk('page');

/*
<noscript>
	<img height="1" width="1" style="display:none;" alt="" src="https://ct.pinterest.com/v3/?tid=2617640505381&noscript=1" />
</noscript>
*/
