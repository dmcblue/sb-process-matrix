class Deliverable{
	constructor(args){
		this.id = args.id || null;
		this.name = args.name || null;
		this.code = args.code || null;
		this.description = args.description || null;
		this.utcDate = args.utcDate || null;
		this.date = this.utcDate ? new Date(this.utcDate) : null;
		this.category = args.category || null;
		this.activities = [];
	}
}

export {Deliverable}