export function WorkspaceVignette() {
  return (
    <svg
      className="workspace-vignette"
      viewBox="0 0 360 210"
      aria-hidden="true"
      focusable="false"
    >
      <g className="shelves">
        <path d="M38 54h128" />
        <path d="M204 72h104" />
        <rect x="54" y="20" width="16" height="34" rx="2" className="book-a" />
        <rect x="75" y="29" width="14" height="25" rx="2" className="book-b" />
        <rect x="94" y="14" width="18" height="40" rx="2" className="book-c" />
        <rect x="232" y="38" width="14" height="34" rx="2" className="book-b" />
        <rect x="251" y="30" width="16" height="42" rx="2" className="book-a" />
        <rect x="272" y="46" width="18" height="26" rx="2" className="book-c" />
      </g>

      <g className="plant">
        <path d="M61 170h42l-6 28H67z" />
        <path d="M82 169c-20-18-18-40 2-51 11 20 8 38-2 51Z" />
        <path d="M82 169c21-14 30-34 22-55-19 9-27 27-22 55Z" />
        <path d="M80 169c-6-24-20-38-42-39 2 22 18 35 42 39Z" />
      </g>

      <g className="desk">
        <path d="M33 178h292" />
        <path d="M68 178v24" />
        <path d="M290 178v24" />
      </g>

      <g className="computer">
        <rect x="134" y="105" width="104" height="62" rx="6" />
        <path d="M166 178h40" />
        <path d="M186 167v11" />
        <rect x="148" y="118" width="76" height="34" rx="3" className="screen" />
      </g>

      <g className="lamp">
        <path d="M277 176V95" />
        <path d="M251 176h52" />
        <path d="M254 93h54l-13-31h-28z" />
        <path d="M265 96c5 11 24 11 30 0" className="lamp-glow" />
      </g>
    </svg>
  )
}
