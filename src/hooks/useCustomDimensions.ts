import useWindowDimensions from "./useWindowDimensions"



const useCustomDimensions = () => {
  const { width, height } = useWindowDimensions()


  const sectionH = height - 80

  const circleLat = width / 3



  return {
    sectionH,
    circleLat
  }
}

export default useCustomDimensions

