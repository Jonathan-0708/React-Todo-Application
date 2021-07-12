import React, { useState } from "react";

const home = () => {
	const [tasks, setTasks] = useState([
		"Walk the dog",
		"Bathe the cat",
		"Buy food",
		"Go to the laundry"
	]);
	const [newTask, SetNewTask] = useState("");

	const handleAddTask = event => {
		if (event.key == "Enter" && newTask.length > 4) {
			setTasks([...tasks, newTask]);
			SetNewTask("");
		}
	};

	const handleDeleteTask = indexTask => {
		let filteredTasks = tasks.filter(
			(currentTask, indexCurrentTask) => indexCurrentTask !== indexTask
		);

		setTasks(filteredTasks);
	};

	return (
		<>
			<div>
				<h1 className="text-center m-2">todos</h1>
				<div className="container shadow  bg-body rounded">
					<div className="justify-content-center">
						<input
							className=" container-fluid texto1 p-1 pl-4 border-0 m-3"
							placeholder="What needs be to done"
							onChange={event => SetNewTask(event.target.value)}
							onKeyPress={event => handleAddTask(event)}
							value={newTask}
						/>

						<ul className="container-fluid">
							{tasks.length
								? tasks.map((task, index) => {
										return (
											<ul
												className="texto1 row border-bottom"
												key={index}>
												<div className="col-11">
													{task}
												</div>
												<div className="col-1">
													<button
														type="button"
														onClick={() =>
															handleDeleteTask(
																index
															)
														}>
														X
													</button>
												</div>
											</ul>
										);
								  })
								: null}
						</ul>
						{tasks.length > 0 ? (
							<footer className="texto2 p-2">
								{tasks.length} Item left
							</footer>
						) : (
							<footer className="texto2 p-2">
								You are free of tasks!!
							</footer>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
export default home;
