export async function setCheckBoxItem(id) {
    try {
        const response = await fetch(`http://localhost:3000/items/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ isChecked: true })
        });

        if (!response.ok) {
            throw new Error('Failed to update item');
        }

        const data = await response.json();
        console.log('Item updated successfully:', data);
    } catch (error) {
        console.error("Error updating item:", error);
    }
}

export async function unsetCheckBoxItem(id) {
    try {
        const response = await fetch(`http://localhost:3000/items/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ isChecked: false })
        });

        if (!response.ok) {
            throw new Error('Failed to update item');
        }

        const data = await response.json();
        console.log('Item updated successfully:', data);
    } catch (error) {
        console.error("Error updating item:", error);
    }
}