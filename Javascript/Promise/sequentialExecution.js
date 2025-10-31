// Write an async function that:
// 	1.	Waits 2 seconds and logs "Downloading file...".
// 	2.	Waits another 2 seconds and logs "Processing file...".
// 	3.	Waits another 1 second and logs "Upload complete!".
// Use await with Promises to execute them in order.

function delay(time){
    return new Promise(resolve=> setTimeout(resolve,time));
}

async function fileUploading(){
    await delay(2000);
    console.log("Downloading file...");
    await delay(2000);
    console.log("Processing file...");
    await delay(1000);
    console.log("Upload Complete...");
}

fileUploading()


