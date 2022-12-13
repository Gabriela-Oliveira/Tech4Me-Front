/** @jsxImportSource @emotion/react */

function PropCSS() {
  const fundo = { background: "blue" };
  const fonte = { color: "red" };
  const azul = { background: "blue" };
  const verde = { background: "green" };

  return (
    <div>
      <div css={{ backgroundColor: "chocolate" }}>
        Fundo chocolate
      </div>

      <div
        css={{
          fontSize: 22,
          backgroundColor: "olive",
        }}
      >
        Olá Mundo!
      </div>

      <div css={[fonte, fundo]}>
        Fonte vermelha e fundo azul
      </div>

      <div css={[azul, verde]}>Verde será aplicado</div>
      <div css={[verde, azul]}>Azul será aplicado</div>
    </div>
  )
}

export default PropCSS;