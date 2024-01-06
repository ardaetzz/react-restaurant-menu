import React from 'react'

const Item = (props) => {
	const { title, price, img } = props;

	return (
		<div className="card border-slate-500 border-2 w-80 bg-base-100 shadow-xl">
			<figure><img src={img} alt="cook pic" /></figure>
			<div className="card-body">
				<h2 className="card-title text-2xl text-white justify-center pb-4">
					{title}
				</h2>
				<div className="card-actions justify-center">
					<div className="badge badge-error text-xl font-bold px-5 py-5">{price}</div>
				</div>
			</div>
		</div>
	)
}

export default Item;