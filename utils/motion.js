// * move from up to down with spring type and given duration & delay
export const navVariants = {
	hidden: {
		opacity: 0,
		y: -50,
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 140
		}
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 80,
			delay: 0.7
		}
	}
};

// * wrap child animated components where Initial and Animate is auto-defined with variants
export const staggerContainer = (staggerChildren, delayChildren) => ({
	hidden: {},
	show: {
		transition: {
			staggerChildren,
			delayChildren
		}
	}
});

// * move from down to up with spring type and given duration & delay
export const textVariant = (delay) => ({
	hidden: {
		y: 50,
		opacity: 0
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			duration: 1.25,
			delay
		}
	}
});

// * move from any direction vertically or horizontally with given type, delay, and duration
// * reusable dynamic animation in different components
export const slideIn = (direction, type, delay, duration) => ({
	hidden: {
		x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
		y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0
		// opacity: 0 // * opacity is optional for top landing image
	},
	show: {
		x: 0,
		y: 0,
		//	opacity: 1, // * opacity is optional for top landing image
		transition: {
			type,
			delay,
			duration,
			ease: 'easeOut',
			...(type === 'spring' && { bounce: 0.3 })
		}
	}
});

export const textContainer = {
	hidden: {
		opacity: 0
	},
	show: (i = 1) => ({
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: i * 0.1 }
	})
};

// * move from down to up with tween type and easeIn
export const textVariant2 = {
	hidden: {
		opacity: 0,
		y: 20
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'tween',
			ease: 'easeIn'
		}
	}
};

export const fadeIn = (direction, type, delay, duration) => ({
	hidden: {
		x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
		y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
		opacity: 0
	},
	show: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			type,
			delay,
			duration,
			ease: 'easeOut'
		}
	}
});

// * move to left or right while rotating
export const planetVariants = (direction) => ({
	hidden: {
		x: direction === 'left' ? '-100%' : '100%',
		rotate: 240
	},
	show: {
		x: 0,
		rotate: 0,
		transition: {
			type: 'spring',
			duration: 1.8,
			delay: 0.5
		}
	}
});

export const zoomIn = (delay, duration) => ({
	hidden: {
		scale: 0,
		opacity: 0
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			type: 'tween',
			delay,
			duration,
			ease: 'easeOut'
		}
	}
});

export const footerVariants = {
	hidden: {
		opacity: 0,
		y: 50,
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 140
		}
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 80,
			delay: 0.5
		}
	}
};
