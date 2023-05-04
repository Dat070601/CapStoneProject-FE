const useLocalStorage = () => {
	const set = ({ key, value }) => {
		localStorage.setItem(key, value);
	};

	const get = ({ key }) => {
		const item = localStorage.getItem(key);
		return item;
	};

	const remove = ({ key }) => {
		localStorage.removeItem(key)
	}

	return { get, set, remove };
};

export default useLocalStorage;