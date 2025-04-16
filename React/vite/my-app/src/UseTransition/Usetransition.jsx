import React, { useState, useTransition } from 'react';

// export const Usetransition = () => {
//     const [input, setInput] = useState('');
//     const [list, setList] = useState([]);
//     const [isPending, startTransition] = useTransition();

//     const handleChange = (e) => {
//         setInput(e.target.value);

//         startTransition(() => {
//             // Create a big list to simulate slow task
//             const filtered = Array.from({ length: 5 }, (_, i) => `${e.target.value} item ${i}`);
//             setList(filtered);
//         });
//     };

//     return (
//         <div>
//             <input className='border-2' value={input} onChange={handleChange} />
//             {isPending && <p>Loading...</p>}

//             {list.map((item, i) => (
//                 <p key={i}>{item}</p>
//             ))}
//         </div>
//     );
// }

function StartTransition() {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);

        // Non-urgent update
        startTransition(() => {
            const updatedList = [];

            for (let i = 0; i < 3000; i++) {
                updatedList.push(`${value} - Item ${i}`);
            }

            setList(updatedList);
        });
    };

    return (
        <div>
            <input className='border' value={input} onChange={handleChange} />
            {isPending && <p>Updating list...</p>}

            <div>
                {list.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
}

export default StartTransition;

