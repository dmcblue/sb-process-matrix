class Task{
	constructor(args){
		this.id = args.id || null;
		this.name = args.name || null;
		this.utcStart = args.utcStart || null;
		this.dateStart = this.utcStart ? new Date(this.utcStart) : null;
		this.utcEnd = args.utcEnd || null;
		this.dateEnd = this.utcEnd ? new Date(this.utcEnd) : null;
		this.progress = args.progress || null;
		this.step = args.step || null;
		this.color = args.color || null;
	}
}

export {Task}