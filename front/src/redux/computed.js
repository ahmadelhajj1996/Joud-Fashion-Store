import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import notify from "../utils/toastr";
const initialState = {
  cart: [],
  totalAmount: 0,
  favorites: [],
};

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";
const CLEAR_CART = "CLEAR_CART";
const ADD_TO_Favorites = "ADD_TO_Favorites";
const REMOVE_FROM_Favorites = "REMOVE_FROM_Favorites";
export const addToCart = (product, variation, quantity = 1) => {
  return (dispatch) => {
    dispatch({
     type: ADD_TO_CART,
    payload: { product, variation, quantity },
  });
  notify("Added Successfully!", 'success')
}
};

export const removeFromCart = (productId, variationId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { productId, variationId },
  };
};

export const increaseQuantity = (productId, variationId) => {
  return {
    type: INCREASE_QUANTITY,
    payload: { productId, variationId },
  };
};

export const decreaseQuantity = (productId, variationId) => {
  return {
    type: DECREASE_QUANTITY,
    payload: { productId, variationId },
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const addToFavorites = (product, variation) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_Favorites,
      payload: { product, variation },
    });

    notify('Added To Favorites' , 'success')

  };
};

export const removeFromFavorites = (productId, variationId) => {
  return {
    type: REMOVE_FROM_Favorites,
    payload: { productId, variationId },
  };
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
  
    case ADD_TO_CART: {
      const { product, variation, quantity } = action.payload;
      const price = variation.price?.['$'] || variation.price || 0; // Ensure price is a valid number
    
      const existingItem = state.cart.find(
        (item) => item.product.id === product.id && item.variation.id === variation.id
      );
    
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.variation.id === variation.id
              ? {
                  ...item,
                  quantity: item.quantity + quantity,
                  total: item.total + price * quantity,  // Fix calculation here
                }
              : item
          ),
          totalAmount: state.totalAmount + price * quantity,  // Fix calculation here
        };
      }
    
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            product,
            variation: {
              ...variation,
              images: Array.isArray(variation.images)
                ? variation.images
                : JSON.parse(variation.images),
            },
            quantity,
            total: price * quantity,  // Fix calculation here
          },
        ],
        totalAmount: state.totalAmount + price * quantity,  // Fix calculation here
      };
    }
     
    

    case REMOVE_FROM_CART: {
      const { variationId } = action.payload;
      const itemToRemove = state.cart.find(
        (item) => item.variation.id === variationId
      );

      if (!itemToRemove) return state;

      return {
        ...state,
        cart: state.cart.filter((item) => item.variation.id !== variationId),
        totalAmount:
          state.totalAmount -
          itemToRemove.variation.price['$'] * itemToRemove.quantity,
      };
    }
    case INCREASE_QUANTITY: {
      const { variationId } = action.payload;
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.variation.id === variationId
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: (item.quantity + 1) * item.variation.price['$'],
              }
            : item
        ),
        totalAmount:
          state.totalAmount +
          (state.cart.find((item) => item.variation.id === variationId)
            ?.variation.price['$'] || 0),
      };
    }

    case DECREASE_QUANTITY: {
      const { variationId } = action.payload;
      const itemToUpdate = state.cart.find(
        (item) => item.variation.id === variationId
      );

      if (!itemToUpdate) return state;

      if (itemToUpdate.quantity === 1) {
        // If quantity is 1, remove the item from the cart
        return {
          ...state,
          cart: state.cart.filter((item) => item.variation.id !== variationId),
          totalAmount:
            state.totalAmount - itemToUpdate.variation.price['$'],
        };
      }

      return {
        ...state,
        cart: state.cart.map((item) =>
          item.variation.id === variationId
            ? {
                ...item,
                quantity: item.quantity - 1,
                total: (item.quantity - 1) * item.variation.price['$'],
              }
            : item
        ),
        totalAmount:
          state.totalAmount - itemToUpdate.variation.price['$'],
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        cart: initialState.cart,
        totalAmount: initialState.totalAmount,
      };
    }
    case ADD_TO_Favorites: {
      const { product, variation } = action.payload;
      const existingItem = state.favorites.find(
        (item) => item.variation.id === variation.id
      );
      if (!existingItem) {
        return {
          ...state,
          favorites: [
            ...state.favorites,
            {
              product,
              variation : {
                ...variation , 
                images : JSON.parse(variation.images)
              } ,  
            },
          ],
        };
      }
      return state;
    }

    case REMOVE_FROM_Favorites: {
      const { variationId } = action.payload;
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.variation.id !== variationId
        ),
      };
    }

    default:
      return state;
  }
};

const persistConfig = {
  key: "bag",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);
export default persistedCartReducer;
