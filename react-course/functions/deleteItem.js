export async function deleteItem(id) {
    try {
        // here the delete item function will be implemented 
        const response = await fetch(`http://localhost:3000/items/${id}`, {
            method: 'DELETE',
        });
        console.log("delete test ",id);
        if (!response.ok) {
            throw new Error('Failed to delete item');
        }

        console.log('Item deleted successfully'); 
    }
catch (error) {
    console.error("Error deleting item:", error);
}
}