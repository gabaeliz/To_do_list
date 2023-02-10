export const uniqueDates = (tasks) => {
    const unique = []
    tasks.foreach(task => {
        if (!unique.includes(task.dateFormat)) unique.push(task.dateFormat);
        }
    );
    return unique;
}