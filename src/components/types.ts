export interface FAQitems {
    question:string,
    answer:string
}

export type Commentitems = {
    id:number,
    text: string,
    author:string,
    children: Commentitems[]
}

export type notesItems = {
    id: number,
    text : string,
    position:any
}

export type TodoItem = {
    id:number,
    text:string,
    completed: boolean,
}

export type State = {
    todos : TodoItem[],
    completed: TodoItem[],
}

export type Action =
| { type: 'ADD_TODO'; payload: TodoItem }
| { type: 'REMOVE_TODO'; payload: number }
| { type: 'ADD_COMPLETED'; payload: TodoItem }
| { type: 'REMOVE_COMPLETED'; payload: number }
| {type: 'RESET_CTODO'; payload: TodoItem[] }
| {type: 'RESET_TODO'; payload: TodoItem[] };