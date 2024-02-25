import { range } from './range'

export const getPagination = (
	maxIndex: number,
	currentIndex: number,
	isLaptop: boolean,
): number[] => {
	const indexList = range(1, maxIndex)
	const indexLength = indexList.length
	const paginationSize = isLaptop ? 9 : 5
	const remainingDistance = indexList[indexLength - 1] - currentIndex

	if (indexLength > paginationSize && currentIndex >= paginationSize) {
		const remainingDistanceCriterion = isLaptop ? 4 : 2
		const currentIndexCriterion = isLaptop ? 5 : 3

		if (remainingDistance >= remainingDistanceCriterion) {
			return indexList.slice(
				currentIndex - currentIndexCriterion,
				currentIndex + remainingDistanceCriterion,
			)
		}
		return indexList.slice(
			currentIndex + remainingDistance - paginationSize,
			currentIndex + remainingDistance,
		)
	}
	if (indexLength > paginationSize && currentIndex <= paginationSize) {
		return indexList.slice(0, paginationSize)
	}
	return indexList
}
