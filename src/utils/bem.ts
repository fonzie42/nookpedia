enum SPACING {
  ELEMENT_SPACING = '__',
  MODIFIER_SPACING = '--',
}

type Suffix = string | null | false

type Block = {
  block: string
}

type Element = {
  element?: Suffix
}

type Modifier = {
  modifier?: Suffix
}

interface AddModifierProps extends Block, Modifier {}
interface AddElementProps extends Block, Element {}
interface BemProps extends AddModifierProps, AddElementProps {}

interface AddSuffixProps {
  base: string
  spacing: SPACING
  suffix?: Suffix
  shouldSuppressBase?: boolean
}

const addSuffix = ({
  base,
  suffix,
  spacing,
  shouldSuppressBase,
}: AddSuffixProps): string => {
  const baseWithSuffix = `${base}${spacing}${suffix}`
  const baseSuffixReturn = shouldSuppressBase
    ? baseWithSuffix
    : `${base} ${baseWithSuffix}`

  return suffix ? baseSuffixReturn : base
}

const addModifier = ({
  block: base,
  modifier: suffix,
}: AddModifierProps): string =>
  addSuffix({ base, suffix, spacing: SPACING.MODIFIER_SPACING })

const addElement = ({
  block: base,
  element: suffix,
}: AddElementProps): string =>
  addSuffix({
    base,
    suffix,
    spacing: SPACING.ELEMENT_SPACING,
    shouldSuppressBase: true,
  })

export const bem = ({ block, element, modifier }: BemProps): string => {
  const blockElement = addElement({ block, element })
  const blockElementModifier = addModifier({ block: blockElement, modifier })
  return blockElementModifier
}
