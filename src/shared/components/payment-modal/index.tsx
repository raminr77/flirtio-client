export function PaymentModal() {
    return (
        <div className="flex flex-col text-sm">
            <h3 className="mb-3 lato-bold-italic text-lg">Payment</h3>
            <ul className="flex flex-col gap-2 max-h-80 overflow-y-auto pb-5">
                {[1, 2, 3, 4, 5].map((index) => (
                    <li key={index} className="dark:bg-black/20 bg-slate-300/50 rounded-md p-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 mb-1">
                                <img width={14} src="/images/star.png" />
                                <span>3</span>
                                <span>Credit</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span>30</span>
                                <span>SEK</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <p>2024-07-07</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
