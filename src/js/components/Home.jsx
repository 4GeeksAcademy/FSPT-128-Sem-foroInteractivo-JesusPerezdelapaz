import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component





const Home = () => {
	const [color, setColor] = useState("");

	//--------------------------- FUNCIÓN PARA QUE SE ILUMINE EL CÍRCULO AL QUE SE CLICA -----------------------------
	const handleClick = (e)=>{
		setColor(e.target.id)
		
		return
	}

	//------------------------------- FUNCIÓN PARA EL BOTÓN QUE ALTERNA LAS LUCES ENCENDIDAS -----------------------------
	const alternarClick = (e) =>{
		if (color === "") setColor("redLight")
		if (color === "redLight") setColor("yellowLight")
		if (color === "yellowLight") setColor("greenLight")
		if (color === "greenLight") setColor("redLight")

			return
	}

	return (
		<div className="text-center container">
			<div className="rectangle">
				<div id="redLight" className={color === "redLight" ? color : ""} onClick={handleClick}></div>
				<div id="yellowLight" className={color === "yellowLight" ? color : ""} onClick={handleClick}></div>
				<div id="greenLight" className={color === "greenLight" ? color : ""} onClick={handleClick}></div>
			</div>
			<div className="botones d-flex flex-column col-6 col-md-3 text-center mx-auto">
				<button className="button" role="button" onClick={handleClick}>Apagar</button>
				<button className="button mt-3" role="button" onClick={alternarClick}>Alternar</button>
			</div>
		</div>
	);
};

export default Home;