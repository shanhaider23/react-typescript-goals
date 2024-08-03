import * as React from 'react';

type CourseGoalProps = React.PropsWithChildren<{ id:number, title: string,  onDelete: (id:number) => void }>

const CourseGoal: React.FunctionComponent<CourseGoalProps> = ({ title, id, children, onDelete }) => {
    return (<article><div><h2>{title}</h2> {children}</div><button onClick={() =>  onDelete(id)}>Delete</button></article>);
};

export default CourseGoal;
