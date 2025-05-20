import type { MouseEventHandler } from "react"

export type ButtonProps = {
    label:string
    onClickHandler?: MouseEventHandler<HTMLButtonElement>
}