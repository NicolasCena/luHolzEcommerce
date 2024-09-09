function Header({
    renderBackButton,
}: {
    renderBackButton?: () => JSX.Element,
}) {

    const renderBack = () => {
        try {
            return typeof renderBackButton === 'function'
                ? renderBackButton()
                : <></>;
        } catch (err) {                
            return <></>;
        }
    };

    return (
        <div className="header">
            <div className='back'>
                {renderBack()}
            </div>
        </div>
    )
}

export { Header };