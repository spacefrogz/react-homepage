import useWindowDimensions from "./useWindowDimensions"



const useCustomDimensions = () => {
  const { width, height } = useWindowDimensions()


  const sectionH = height - 80

  const miniSectionH = height / 2

  const circleLat = width / 3



  return {
    sectionH,
    miniSectionH,
    circleLat
  }
}

export default useCustomDimensions

