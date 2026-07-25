const imageModules = import.meta.glob('/public/images/projects/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}')

export function getProjectImages(folder: string): string[] {
    const prefix = `/public/images/projects/${folder}/`
    return Object.keys(imageModules)
        .filter(path => path.startsWith(prefix))
        .map(path => `${import.meta.env.BASE_URL}${path.slice('/public/'.length)}`)
        .sort()
}
