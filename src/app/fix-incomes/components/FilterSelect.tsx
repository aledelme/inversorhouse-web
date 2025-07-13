export default function FilterSelect({
    label,
    value,
    onChange,
    options,
    boolOptions = false,
}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    options: string[];
    boolOptions?: boolean;
}) {
    return (
        <div style={{ marginBottom: 18 }}>
            <h4><label style={{ display: "block", marginBottom: 4 }}>{label}</label></h4>
            <div style={{ position: "relative" }}>
                <select
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    style={{ width: "100%", paddingRight: value ? 32 : undefined }}
                >
                    <option value="">Todas</option>
                    {boolOptions ? (
                        <>
                            <option value="true">{options[0]}</option>
                            <option value="false">{options[1]}</option>
                        </>
                    ) : (
                        options.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))
                    )}
                </select>
                {value && (
                    <button
                        aria-label="Quitar filtro"
                        onClick={() => onChange("")}
                        style={{
                            position: "absolute",
                            right: 6,
                            top: "50%",
                            transform: "translateY(-50%)",
                            border: "none",
                            background: "transparent",
                            borderRadius: "50%",
                            cursor: "pointer",
                            padding: 0,
                            marginInlineEnd: 22,
                            width: 22,
                            height: 22,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                        tabIndex={-1}
                        type="button"
                    >
                        <span style={{
                            display: "inline-block",
                            width: 18,
                            height: 18,
                            lineHeight: "18px",
                            textAlign: "center",
                            fontSize: 16,
                            color: "#888",
                            background: "#eee",
                            borderRadius: "50%"
                        }}>✕</span>
                    </button>
                )}
            </div>
        </div>
    );
}