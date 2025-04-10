import React from 'react';
import AddIcon from '@mui/icons-material/Add';

const reasons = [
    { text: "Dui ac dhejs hfeisjd abdhrhd urdre kvnjdcd", showIcon: true },
    { text: "Dui ac dhejs hfeisjd abdhrhd ehbf vjnre kvnjdcd", showIcon: true },
    { text: "Dui ac dhejs hfeisjd rhd urdehbf vjnre kvnjdcd", showIcon: true },
    { text: "Dui ac dhejs sjd abdhrhd urdehbf vjnre kvnjdcd", showIcon: true },
];

export const HorizontalLineApply = () => {
    return (
        <div>
            <hr className="h-2 mt-2 mb-2" />
        </div>
    )
}

export const AddPlusIcon = () => {
    return (
        <div>
            <AddIcon sx={{ backgroundColor: 'black', color: 'white' }} />
        </div>
    )
}

const Testimonials = () => (
    <div className="px-8 py-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
            <div className="flex flex-col text-left w-1/2 ml-32">
                <p className="mb-2 font-extrabold text-xl">TRUSTED CLIENTS</p>
                <p className="mb-6 text-xs text-gray-400">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                <p className="p-8 bg-gray-100 text-xs text-gray-400 font-bold">
                    Integer congue eidt non semper leoreet sen lectures crui posuer nisal ryuw ggsugs gtrtws.
                    Integer congue eidt non semper leoreet sen lectures crui posuer nisal pemoouryuw ggsugs gtrtws.
                    Integer congue eidt non semper leoreet sen lectures crui posuer nisal pemoouryuw ggsugs gtrtws.
                </p>
            </div>

            <div className="flex flex-col text-left w-1/2 ml-32">
                <p className="mb-2 font-extrabold text-xl">WHY CHOOSE US</p>
                <p className="mb-6 text-xs text-gray-400">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                {reasons.map((reason, index) => (
                    <div key={index}>
                        <HorizontalLineApply />
                        <div className="flex items-center justify-between">
                            <p className="py-2 text-xs">{reason?.text}</p>
                            {reason?.showIcon && <AddPlusIcon />}
                        </div>
                    </div>
                ))}
                <HorizontalLineApply />
            </div>
        </div>
    </div>
);

export default Testimonials;
