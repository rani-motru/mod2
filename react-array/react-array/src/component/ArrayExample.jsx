function ArrayExample() {
    // this is an example of map but using an array with number elements
    const nums = [2, 5, 8, 2, 9];
    const numsMap = nums.map(num => console.log(num));
    // an array of dogs

    const lessonArray = [
        {
            date: '09Nov2023',
            subject: 'math',
            topic: 'measurement',
            completed: true
        },
        {
            date: '02Nov2023',
            subject: 'math',
            topic: 'ratios',
            completed: false
        },
        {
            date: '02Nov2023',
            subject: 'science',
            topic: 'genotypes and phenotypes',
            completed: true
        }
    ]
    return (
        <div>
            <div>Hello</div>
            <ul>
                {lessonArray.map(
                    lesson => {
                        return (
                        <li>
                            <h2>Lesson</h2>
                            <h3>date: {lesson.date}</h3>
                            <h3>subject: {lesson.subject}</h3>
                            <h3>topic: {lesson.topic}</h3>
                            <h3>completed: {lesson.completed ? 'is complete' : 'is not complete'}</h3>  
                        </li>
                    )
                    }
                ) }
            </ul>
        </div>

    )
}

export default ArrayExample;