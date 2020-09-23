import React from "react";
import './style.css';

export const Stars = () => (
<div className="rating-area">
	<input type="radio" id="star-5" name="rating" value="5" />
	<label for="star-5" title="Оценка «5»" />	
	<input type="radio" id="star-4" name="rating" value="4" />
	<label for="star-4" title="Оценка «4»" />   
	<input type="radio" id="star-3" name="rating" value="3" />
	<label for="star-3" title="Оценка «3»" />  
	<input type="radio" id="star-2" name="rating" value="2" />
	<label for="star-2" title="Оценка «2»" />   
	<input type="radio" id="star-1" name="rating" value="1" />
	<label for="star-1" title="Оценка «1»" />
</div>
)