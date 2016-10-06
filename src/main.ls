
cache = []

main = (size) -> 

	if cache[size]

		cache[size]

	else
		
		cache[size] = (((new Array size).fill " ")).join ""

		cache[size]


module.exports = main