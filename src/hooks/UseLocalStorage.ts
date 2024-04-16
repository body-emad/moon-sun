export const useLocalStorage = (key: string) => {
  const setStoredLikes = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  const getStoredLikes = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.log(error);
    }
  };
  const setStoredCartItems = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  const getStoredCartItems = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.log(error);
    }
  };
  const setDisplayView = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.stringify(item) : undefined;
    } catch (error) {
      console.log(error);
    }
  };
  const getDisplayView = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    setStoredLikes,
    getStoredLikes,
    setStoredCartItems,
    getStoredCartItems,
    setDisplayView,
    getDisplayView,
  };
};
