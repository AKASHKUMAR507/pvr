import colors from "./colors"

const shadows = {
    shadowExtraLight: {
        shadowColor: colors.Black,

        shadowOffset: {
            width: 0,
            height: 1,
        },

        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },

    shadowLight: {
        shadowColor: colors.Black,

        shadowOffset: {
	        width: 0,
	        height: 1,
        },

        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },

    shadowMedium: {
        shadowColor: colors.Black,

        shadowOffset: {
        	width: 0,
        	height: 2,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },

    shadowHeavy: {
        shadowColor: colors.Black,

        shadowOffset: {
            width: 0,
            height: 5,
        },

        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 10,
    },
}

export default shadows;