export async function postItem(item) {
    try {
        // here the post item function will be implemented 
        const response = await fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });

        if (!response.ok) {
            throw new Error('Failed to post item');
        }

        const data = await response.json();
        console.log('Item posted successfully:', data); 
    }
catch (error) {
    console.error("Error posting item:", error);
}
}