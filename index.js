window.addEventListener("load",()=>
	{
		const sounds=document.querySelectorAll(".sound");
		const pads=document.querySelectorAll(".pads div");
		const visuals=document.querySelector(".visual");
		const colors=[
		"#60d394",
"#d36060",
"#c060d3",
"#23ba2f",
"#6860d3",
"#60b2d3"



		];
			console.log(sounds);
			//lets get sound going here.
		pads.forEach((pad,index)=>{
			pad.addEventListener('click',function(){

				sounds[index].currentTime=0;
				sounds[index].play();
				createBubbles(index);
			});
		});
 

		//Create a function that makes bubbles.
		const createBubbles =(index)=>{

			const bubble=document.createElement("div");
			visuals.appendChild(bubble);
			bubble.style.backgroundColor=colors[index];
			bubble.style.animation='jump 1s ease';
			bubble.addEventListener("animationed",function()
				{
					visuals.removeChild(this);
				});
		};
	});

